<?= $this->extend('layouts/index') ?>
<?= $this->section('content') ?>
<form action="/admin/dashboard/addholiday" method="post">
    <input type="date" name="holiday_date" required>
    <input type="text" name="holiday_reason" placeholder="Festival" required>
    <button type="submit">Add Holiday</button>
</form>
<?= $this->endSection(); ?>