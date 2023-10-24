<?= $this->extend('layouts/index') ?>
<?= $this->section('content') ?>
<div class="row">
    <?php foreach ($data as $item) : ?>
        <?php if (!$item['employee_is_delete']) : ?>
            <div class="col-lg-4 card employee-card" style="width: 18rem;">
                <div>
                    <img style='padding:10px;' width="130px" src="<?php
                                                                    $src = 'images/' . $item['employee_gender'] . '.png';
                                                                    echo base_url($src); ?>" alt='gender image' />
                </div>
                <div class='card-body'>
                    <div>
                        <h4><?= $item['employee_name'] ?></h4>
                        <p><?= $item['employee_email'] ?></p>
                        <p><?= $item['employee_phoneno'] ?></p>
                        <p><?= $item['employee_role'] ?></p>
                    </div>
                    <div class='leaves-content'>
                        <h4><?= 'Leaves Info'; ?></h4>
                        <table style='width:100%'>
                            <tbody>
                                <tr>
                                    <td>Sick leaves</td>
                                    <td> <?= $item['employee_no_sick_leaves'] ?></td>
                                </tr>
                                <tr>
                                    <td>Emergency leaves</td>
                                    <td> <?= $item['employee_no_emg_leaves'] ?></td>
                                </tr>
                                <tr>
                                    <td>Personal leaves</td>
                                    <td> <?= $item['employee_no_personal_leaves'] ?></td>
                                </tr>
                                <?php if ($item['employee_marital_status'] === 'Married') : ?>
                                    <?php if ($item['employee_gender'] === "Male") : ?>
                                        <tr>
                                            <td>Paternity leaves</td>
                                            <td> <?= $item['employee_no_pat_leaves'] ?></td>
                                        </tr>
                                    <?php else : ?>
                                        <tr>
                                            <td>Maternity leaves</td>
                                            <td> <?= $item['employee_no_mat_leaves'] ?></td>
                                        </tr>
                                    <?php endif ?>
                                <?php endif ?>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div style="padding:20px;">
                    <button class='btn btn-danger w-100' data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="setDelete(<?= $item['employee_id'] ?>,'<?php echo $item['employee_name']; ?>')">Delete</button>
                </div>
            </div>
        <?php endif ?>
    <?php endforeach ?>
</div>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Confirm Deletion</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" id='modal-username'>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                    <a id='delete-link'>Delete the User</a></button>
            </div>
        </div>
    </div>
</div>
<script>
    function setDelete(id, name) {
        const username = document.getElementById('modal-username');
        username.textContent = name;
        const link = document.getElementById('delete-link');
        link.setAttribute('href', `/admin/dashboard/delete/${id}`);

    }
</script>
<?= $this->endSection(); ?>