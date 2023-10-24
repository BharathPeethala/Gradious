<?= $this->extend('layouts/index') ?>
<?= $this->section('content') ?>
<form action='/employee/password/update' method="post" class='login-form'>
    <h3>Update Password</h3>
    <input class="form-control" type="password" name='update-password-1' placeholder="new password"/>
    <input class="form-control" type="password" name='update-password-2' placeholder="confirm new password"/>
    <div class='form-btn-div'>
        <button class="btn btn-primary" type="submit">Update</button>
    </div>
</form>
<?= $this->endSection() ?>