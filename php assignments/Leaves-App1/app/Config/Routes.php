<?php

namespace Config;

// Create a new instance of our RouteCollection class.
$routes = Services::routes();

/*
 * --------------------------------------------------------------------
 * Router Setup
 * --------------------------------------------------------------------
 */
$routes->setDefaultNamespace('App\Controllers');
$routes->setDefaultController('Home');
$routes->setDefaultMethod('index');
$routes->setTranslateURIDashes(false);
$routes->set404Override();
// The Auto Routing (Legacy) is very dangerous. It is easy to create vulnerable apps
// where controller filters or CSRF protection are bypassed.
// If you don't want to define all routes, please use the Auto Routing (Improved).
// Set `$autoRoutesImproved` to true in `app/Config/Feature.php` and set the following to true.
// $routes->setAutoRoute(false);

/*
 * --------------------------------------------------------------------
 * Route Definitions
 * --------------------------------------------------------------------
 */

// We get a performance increase by specifying the default
// route since we don't have to scan directories.


$routes->add('/', 'Home');
$routes->add('/logout', 'Home::logout');
// $routes->post('empolyee/dashboard/leave-requests/rejection/message/(:any)', 'Employee\Employee::rejectionMessage/$1');
$routes->group('/employee', function ($routes) {
    $routes->get('/', 'Employee\Employee::index');
    $routes->get('login', 'Employee\Employee::login');
    $routes->post('login', 'Employee\Employee::authenticate');
    $routes->post('password/update', 'Employee\Employee::updatePassword');
    $routes->group('dashboard', function ($routes) {
        $routes->add('', 'Employee\Employee::dashboard');
        $routes->add('profile', 'Employee\Employee::profile');
        $routes->add('apply', 'Employee\Employee::apply');
        $routes->add('update', 'Employee\Employee::update');
        $routes->add('leave-requests/options/(:any)', 'Employee\Employee::displayLeaves/$1');
        $routes->add('leave-requests/accept/(:any)', 'Employee\Employee::accept/$1');
        $routes->add('leave-requests/reject/(:any)', 'Employee\Employee::reject/$1');
        $routes->add('leaves/options/(:any)', 'Employee\Employee::employeeLeavesDisplay/$1');
        $routes->post('leave-requests/rejection/message/(:any)', 'Employee\Employee::rejectionMessage/$1');
    });
});


$routes->group('/admin', function ($routes) {
    $routes->get('/', 'Admin\Admin::index');
    $routes->get('login', 'Admin\Admin::login');
    $routes->post('login', 'Admin\Admin::authenticate');
    $routes->group('dashboard', function ($routes) {
        $routes->add('', 'Admin\Admin::dashboard');
        $routes->add('add', 'Admin\Admin::add');
        $routes->add('view', 'Admin\Admin::view');
        $routes->add('delete/(:any)', 'Admin\Admin::delete/$1');
    });
});


/*
 * --------------------------------------------------------------------
 * Additional Routing
 * --------------------------------------------------------------------
 *
 * There will often be times that you need additional routing and you
 * need it to be able to override any defaults in this file. Environment
 * based routes is one such time. require() additional route files here
 * to make that happen.
 *
 * You will have access to the $routes object within that file without
 * needing to reload it.
 */
if (is_file(APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php')) {
    require APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php';
}
