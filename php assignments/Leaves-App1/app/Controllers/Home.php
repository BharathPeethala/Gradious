<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index()
    {
        $session = session();
        if ($session->logged_in) {
            $route = '/' . $session->user_type . '/dashboard';
            return redirect()->to($route);
        }
        return view('home');
    }
    public function logout()
    {
        $session = session();
        $session->destroy();
        return redirect()->to('/');
    }
}
