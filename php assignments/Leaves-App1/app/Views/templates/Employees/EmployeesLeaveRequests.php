<?= $this->extend('layouts/index') ?>
<?= $this->section('content') ?>
<table class="table table-striped">
    <thead>
        <?php
        $session = session();
        if ($session->user_role != 'Manager') : ?>
            <th scope="col">Manager</th>
        <?php else : ?>
            <th scope="col">Employee</th>
        <?php endif ?>
        <th scope="col">Leave Type</th>
        <th scope="col">Leave Status</th>
        <th scope="col">Leave Reason</th>
        <th scope="col">Leave Interval</th>
        <!-- <th scope="col">Rejection Message</th> -->
        <?php
        $session = session();
        if ($session->user_role === 'Manager') : ?>
            <th scope="col">Actions</th>
        <?php endif ?>

    </thead>
    <?php foreach ($data as $item) : ?>
        <?php if ($item['status'] === 'pending') : ?>
            <tr>
                <td>
                    <p><?= $item['emp_name'] ?></p>
                </td>
                <td>
                    <p><?= $item['leave_type'] ?></p>
                </td>
                <td><button class="btn btn-warning">PENDING</button></td>
                <td>
                    <p><?= $item['reason'] ?></p>
                </td>
                <td>
                    <p><?= $item['to'] ?> - <?= $item['from'] ?></p>
                </td>
                <?php $session = session();
                if ($session->user_role === 'Manager' && $session->id !== $item['emp_id']) : ?>
                    <td>
                        <button class='btn btn-success'><a href="/employee/dashboard/leave-requests/accept/<?= $item['id'] ?>">Accept</a></button>
                        <button class='btn btn-danger'><a href="/employee/dashboard/leave-requests/reject/<?= $item['id'] ?>">Reject</a></button>
                    </td>
                <?php endif ?>
            </tr>
        <?php endif ?>
        <?php if ($item['status'] === 'rejected') : ?>
            <tr>
                <td>
                    <p><?= $item['emp_name'] ?></p>
                </td>
                <td>
                    <p><?= $item['leave_type'] ?></p>
                </td>
                <td><button class="btn btn-danger">REJECTED</button>
                    <p><?= $item['rejection_message'] ?></p>
                </td>
                <td>
                    <p><?= $item['reason'] ?></p>
                </td>
                <td>
                    <p><?= $item['to'] ?> - <?= $item['from'] ?></p>
                </td>
                <?php $session = session();
                if ($session->user_role === 'Manager' && $session->id !== $item['emp_id']) : ?>
                    <td>
                        <button class='btn btn-success' disabled><a href="/employee/dashboard/leave-requests/accept/<?= $item['id'] ?>">Accept</a></button>
                        <button class='btn btn-danger' disabled><a href="/employee/dashboard/leave-requests/reject/<?= $item['id'] ?>">Reject</a></button>
                    </td>
                <?php endif ?>
            </tr>
        <?php endif ?>
        <?php if ($item['status'] === 'accepted') : ?>
            <tr>
                <td>
                    <p><?= $item['emp_name'] ?></p>
                </td>
                <td>
                    <p><?= $item['leave_type'] ?></p>
                </td>
                <td><button class="btn btn-success">ACCEPTED</button></td>
                <td>
                    <p><?= $item['reason'] ?></p>
                </td>
                <td>
                    <p><?= $item['to'] ?> - <?= $item['from'] ?></p>
                </td>
                <?php $session = session();
                if ($session->user_role === 'Manager' && $session->id !== $item['emp_id']) : ?>
                    <td>
                        <button class='btn btn-success' disabled><a href="/employee/dashboard/leave-requests/accept/<?= $item['id'] ?>">Accept</a></button>
                        <button class='btn btn-danger' disabled><a href="/employee/dashboard/leave-requests/reject/<?= $item['id'] ?>">Reject</a></button>
                    </td>
                <?php endif ?>
            </tr>
        <?php endif ?>
    <?php endforeach ?>
</table>
<?= $this->endSection() ?>