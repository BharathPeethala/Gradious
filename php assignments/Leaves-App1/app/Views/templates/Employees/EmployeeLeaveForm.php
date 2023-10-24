<?= $this->extend('layouts/index') ?>
<?= $this->section('content') ?>
<form action="/employee/dashboard/apply" method="post" class='add-leave-form'>
    <div class='add-leave-form-div' style='display:flex; flex-direction:column;'>
        <div style='display:flex;'>
            <div>
                <select class='form-control' name="manager_id" id="" required>
                    <option value="">Manager</option>
                    <?php
                    foreach ($managers as $manager) {
                        echo '<option ' . 'value=' . $manager['employee_id'] . '>' . $manager['employee_name'] . '</option>';
                    }
                    ?>
                </select>
            </div>
            <div>
                <select class='form-control' name="typeOfLeave" id="" required>
                    <option value="">Type Of Leave</option>
                    <option value="Sick Leave">Sick Leave</option>
                    <option value="Emergency Leave">Emergeency Leave</option>
                    <option value="Personal Leave">Personal Leave</option>
                    <option value="Paternity Leave">Paternity Leave</option>
                    <option value="Maternity Leave">Maternity Leave</option>
                </select>
            </div>
        </div>
        <div style='display:flex;'>
            <div>
                <select class='form-control' name="noOfDays" id="noOfDays" onChange='Check()' required>
                    <option value="">No Of Days</option>
                    <option value="Single">Single Day</option>
                    <option value="Multiple">Multiple Days</option>
                </select>
            </div>
            <div>
                <input class='form-control datefields' type="date" id="fromDate" name="from_date" min=<?= date('Y-m-d') ?> style="display:none" required>
            </div>
            <div>
                <input class='form-control datefields' type="date" id='toDate'name="to_date" style="display:none" required>
            </div>
        </div>
    </div>
    <textarea class='form-control' name="reason" id="" rows="3" placeholder="comments" required></textarea>
    <div class='form-btn-div'>
        <button class='btn btn-primary' type="submit">Apply Leave</button>
    </div>
    <script type="text/javascript">
        let Check = () => {
            console.log('object')
            console.log(document.getElementById('noOfDays').value);
            if (document.getElementById('noOfDays').value === 'Multiple') {
                let inputs = document.querySelectorAll('.datefields');
                for (let i = 0; i < inputs.length; i++) {
                    inputs[i].style.display = 'block';
                }
            } else {
                let inputs = document.querySelectorAll('.datefields');
                for (let i = 0; i < inputs.length; i++) {
                    inputs[i].style.display = 'none';
                }
                document.getElementById('fromDate').style.display = 'block';
                document.getElementById('toDate').removeAttribute('required');
            }
        }
    </script>
</form>
<?= $this->endSection() ?>