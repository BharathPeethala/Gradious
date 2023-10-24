<?= $this->extend('layouts/index') ?>
<?= $this->section('content') ?>
<div class='login-container'>
    <form action="/<?= $type ?>/login" method="post" class="login-form">
        <h3><?= ucfirst($type) ?> Login</h3>
        <input class='form-control' name="email" type="email" placeholder="email" required />
        <input class='form-control' name="password" type="password" placeholder="password" required />
        <button type="submit" class='btn btn-primary w-50'>Login</button>
    </form>
</div>
<?= $this->endSection() ?>