<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
    <meta name="description" content="Mehata family invites you">
    <meta name="author" content="Yash Mehata">

    <meta property="og:title" content="Invitation">
    <meta property="og:description" content="Mehata family invites you to the Enagement Ceremony of Vishal Mehata and Hiral Damania">
    <meta property="og:author" content="Yash Mehata">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Invitation') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('build/global/main.css') }}" rel="stylesheet">
    @yield('headers')
</head>
<body>
    <div class="container">
        @yield('content')
        <script src="{{ asset('build/global/main.js') }}" defer></script>
    </div>
</body>
