<?php
namespace App\Http\Controllers;

class InviteController extends Controller{
    public function index($hash=null)
    {
        $this->logData($hash);
        return view('invite');
    }
    private function logData($hash)
    {
        # code...
    }
}
