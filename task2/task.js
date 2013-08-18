/**
 * Создает экземпляр космического корабля.
 * @name Vessel
 * @param {String} name Название корабля.
 * @param {Number}[] position Местоположение корабля.
 * @param {Number} capacity Грузоподъемность корабля.
 */
 "use strict";
function Vessel(name, position, capacity) {
	this.name = name;
	this.position = position;
	this.capacity = capacity;
	this.freespace = capacity;
}

/**
 * Выводит текущее состояние корабля: имя, местоположение, доступную грузоподъемность.
 * @example
 * vessel.report(); // Грузовой корабль. Местоположение: Земля. Товаров нет.
 * @example
 * vesserl.report(); // Грузовой корабль. Местоположение: 50,20. Груз: 200т.
 * @name Vessel.report
 */
Vessel.prototype.report = function () {
	console.log("Корабль: " + this.name + "; Местоположение: " + this.position + "; Вместимость судна: " + this.capacity + " тонн. Занято: " + vessel.getOccupiedSpace());
	var p = document.createElement('p');
	p.innerHTML = "Корабль: " + this.name + "; Местоположение: " + this.position + "; Вместимость судна: " + this.capacity + " тонн. Занято: " + vessel.getOccupiedSpace();
	document.getElementById("log").appendChild(p);
}

/**
 * Выводит количество свободного места на корабле.
 * @name Vessel.getFreeSpace
 */
Vessel.prototype.getFreeSpace = function () {
	return this.freespace;
}

/**
 * Выводит количество занятого места на корабле.
 * @name Vessel.getOccupiedSpace
 */
Vessel.prototype.getOccupiedSpace = function () {
	return (this.capacity - this.freespace);
}

/**
 * Переносит корабль в указанную точку.
 * @param {Number}[]|Planet newPosition Новое местоположение корабля.
 * @example
 * vessel.flyTo([1,1]);
 * @example
 * var earth = new Planet('Земля', [1,1]);
 * vessel.flyTo(earth);
 * @name Vessel.report
 */
Vessel.prototype.flyTo = function (newPosition) {
	this.position = newPosition.position;
	this.report();
}

/**
 * Создает экземпляр планеты.
 * @name Planet
 * @param {String} name Название Планеты.
 * @param {Number}[] position Местоположение планеты.
 * @param {Number} availableAmountOfCargo Доступное количество груза.
 */
function Planet(name, position, availableAmountOfCargo) {
	this.name = name;
	this.position = position;
	this.availableAmountOfCargo = availableAmountOfCargo;
}

/**
 * Выводит текущее состояние планеты: имя, местоположение, количество доступного груза.
 * @name Planet.report
 */
Planet.prototype.report = function () {
	console.log("Планета: " + this.name + "; Координаты: " + this.position + "; Доступно грузов: " + this.availableAmountOfCargo);
	var p = document.createElement('p');
	p.innerHTML = "Планета: " + this.name + "; Координаты: " + this.position + "; Доступно грузов: " + this.availableAmountOfCargo;
	document.getElementById("log").appendChild(p);
}

/**
 * Возвращает доступное количество груза планеты.
 * @name Vessel.getAvailableAmountOfCargo
 */
Planet.prototype.getAvailableAmountOfCargo = function () {
	return this.availableAmountOfCargo;
}

/**
 * Загружает на корабль заданное количество груза.
 * 
 * Перед загрузкой корабль должен приземлиться на планету.
 * @param {Vessel} vessel Загружаемый корабль.
 * @param {Number} cargoWeight Вес загружаемого груза.
 * @name Vessel.loadCargoTo
 */
Planet.prototype.loadCargoTo = function (vessel, cargoWeight) {
	if (cargoWeight > vessel.freespace){
		console.log('Корабль не может принять такое количество груза');
		return false;
	};

	if (this.position == vessel.position) {
		vessel.freespace -= cargoWeight;
		this.availableAmountOfCargo -= cargoWeight;
	}else{
		console.log("Корабль находится на другой планете");
	};
}

/**
 * Выгружает с корабля заданное количество груза.
 * 
 * Перед выгрузкой корабль должен приземлиться на планету.
 * @param {Vessel} vessel Разгружаемый корабль.
 * @param {Number} cargoWeight Вес выгружаемого груза.
 * @name Vessel.unloadCargoFrom
 */
Planet.prototype.unloadCargoFrom = function (vessel, cargoWeight) {
	if (this.position == vessel.position) {
		vessel.freespace += cargoWeight;
		this.availableAmountOfCargo += cargoWeight;
	}else{
		console.log("Корабль находится на другой планете");
	};	
}
