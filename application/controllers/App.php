<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class App extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		//$this->load->model('mapp');
		// $this->load->library('session');
		$this->load->helpers('url');
		// $this->load->database();
	}

	public function index()
	{
		$this->load->view('index');
	}

	public function tutors() {
		$this->load->view('tutors');
	}

	public function course() {
		$this->load->view('course');
	}

	public function user_home() {
		$this->load->view('user_home');
	}

}
