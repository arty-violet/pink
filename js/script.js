"use strict";$(function(){$(".reviews__slider").slick({dots:!0,arrows:!1,fade:!0,infinite:!1,mobileFirst:!0,responsive:[{breakpoint:1023,settings:{arrows:!0,dots:!1}}]})}),$(function(){$(".purchase__toggle").on("click",function(){$(".purchase__toggle").removeClass("purchase__toggle--active"),$(this).toggleClass("purchase__toggle--active")}),$(".purchase__toggle--1").on("click",function(){$(".functions").removeClass("functions--1"),$(".functions").removeClass("functions--2"),$(".functions").removeClass("functions--3"),$(".functions").addClass("functions--1")}),$(".purchase__toggle--2").on("click",function(){$(".functions").removeClass("functions--1"),$(".functions").removeClass("functions--2"),$(".functions").removeClass("functions--3"),$(".functions").addClass("functions--2")}),$(".purchase__toggle--3").on("click",function(){$(".functions").removeClass("functions--1"),$(".functions").removeClass("functions--2"),$(".functions").removeClass("functions--3"),$(".functions").addClass("functions--3")})}),$(function(){$(".photo-filter__button--crop").on("click",function(){$(".photo-filter__button").removeClass("photo-filter__button--active"),$(".photo-filter__range").removeClass("photo-filter__range--active"),$(".photo-filter__button--crop").addClass("photo-filter__button--active"),$(".photo-filter__range--crop").addClass("photo-filter__range--active")}),$(".photo-filter__button--fill").on("click",function(){$(".photo-filter__button").removeClass("photo-filter__button--active"),$(".photo-filter__range").removeClass("photo-filter__range--active"),$(".photo-filter__button--fill").addClass("photo-filter__button--active"),$(".photo-filter__range--fill").addClass("photo-filter__range--active")}),$(".photo-filter__button--contrast").on("click",function(){$(".photo-filter__button").removeClass("photo-filter__button--active"),$(".photo-filter__range").removeClass("photo-filter__range--active"),$(".photo-filter__button--contrast").addClass("photo-filter__button--active"),$(".photo-filter__range--contrast").addClass("photo-filter__range--active")})});