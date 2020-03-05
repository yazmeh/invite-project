@extends('layout.app')

@section('headers')
    <link href="{{ asset('build/invite-app/main.css') }}" rel="stylesheet">
@endsection
@section('content')
    <div class="main">
        <div id="app"></div>
    </div>
    <script src="{{ asset('build/invite-app/main.js') }}" defer></script>
@endsection
