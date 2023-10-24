<div class="container">
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Enter details of the employee</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form method='POST' action="/employees-list/controllers/insert.php">
                    <div class="modal-body">
                        <div class="userForm">
                            <div id="addUserForm">
                                <input type="text" id="input-name" class="form-control " name='name' placeholder="Name" pattern="[a-zA-Z\s]+" title="special characters are not allowed" required>
                                <input type="number" id="input-age" class="form-control " name='age' placeholder="Age" min='18' max="100" required>
                                <input type="email" id="input-email" class="form-control " name='email' placeholder="Email" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}">
                                <select class="form-control" name='gender' required>
                                    <option value=''>Gender</option>
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                </select>
                                <select class='form-control' name="state" id="input-state" required>
                                    <option value=''>State</option>
                                    <?php
                                    require 'config/constants.php';
                                    for ($i = 0; $i < count($states); $i++) {
                                        echo '<option value=' . $i . '>' .$states[$i] . '</option>';
                                    } ?>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" type=" submit">Add User</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        <button type="reset" class="btn btn-warning">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    </div>