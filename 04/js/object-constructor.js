var hotel = new Object();

hotel.name = 'Park';
hotel.roosm = 120;
hotel.booked = 77;
hotel.checkAvailibility = function() {
    return this.rooms - this.booked;
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.namel

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailibility();