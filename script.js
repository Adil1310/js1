// Домашнее задание №1: Введение в программирование. Алгоритмы
// Задание. 
// Запрашивать данные у пользователя необходимо с помощью prompt(), а выводить результат с помощью alert().
// для получения данных делаем что то вроде 
// let a = promt()
// для вывода 
// alert(a)

// Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
let a = prompt('Enter Your name: ')
alert('His name is ' + a)

// Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
let b = prompt('How old are You: ')
alert('His is ' + b + ' years old!')

// Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата. 
let squarSideOne = prompt('Squar side 1: ')
let squarSideTwo = prompt('Squar side 2: ')
alert('Square area is '+ squarSideOne*squarSideTwo)

// Запросите у пользователя радиус окружности и выведите площадь такой окружности.
let diameter = prompt('Diameter: ')
alert('Radius is ' + diameter/2)

// Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. 
// Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
let distance = prompt('Distance: ')
let time = prompt('Time: ')
alert('Required speed '+ distance/time)

// Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
let dollar = prompt('USD exchange rate:')
alert('Conversion to EUR '+ dollar*0.94)