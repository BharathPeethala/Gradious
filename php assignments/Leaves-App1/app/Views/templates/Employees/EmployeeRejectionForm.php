<?= $this->extend('layouts/index') ?>
<?= $this->section('content') ?>
<form action="/employee/dashboard/leave-requests/rejection/message/<?= $data['leave_id'] ?>" method="post">
    <div>
        <textarea class='form-control' name='rejection' rows="5" cols="30" placeholder="Rejection Message(5000)" required></textarea>
    </div>
    <div class='form-btn-div'>
        <button class='btn btn-lg btn-danger '>Reject</button>
    </div>
</form>
<?= $this->endSection() ?>