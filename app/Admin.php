<?php

namespace App;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
class Admin extends Authenticatable
{
    use HasApiTokens,Notifiable;
    protected $fillable = [
        'name', 'email', 'password',
    ];
}
