<div class='sidebar'>
    <!-- <li><a href='/employee/dashboard/profile'>Profile</a></li> -->
    <div><a href='/employee/dashboard/apply'>Apply Leave</a></div>
    <div><a href='/employee/dashboard/update'>Update</a></div>
    <div><a href='/employee/dashboard/leaves/options/history'>Leaves History</a></div>
    <div><a href='/employee/dashboard/leaves/options/pending'>Pending Requests</a></div>
    <div> <a href='/employee/dashboard/leaves/options/accepted'>Accepted Requests</a></div>
    <div> <a href='/employee/dashboard/leaves/options/rejected'>Rejected Requests</a></div>
    <?php
    $session = session();
    if ($session->user_role === 'Manager') : ?>
    <h4>Employees</h4>
        <div> <a href='/employee/dashboard/leave-requests/options/history'>Requests History</a></div>
        <div> <a href='/employee/dashboard/leave-requests/options/pending'>Pending Requests</a></div>
        <div> <a href='/employee/dashboard/leave-requests/options/accepted'>Accepted Requests</a></div>
        <div> <a href='/employee/dashboard/leave-requests/options/rejected'>Rejected Requests</a></div>
    <?php endif ?>
</div>