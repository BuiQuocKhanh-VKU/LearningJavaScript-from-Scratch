const calAvg = (room, parking, bath, living, kitchen) => {
    return (room + parking + bath + living + kitchen) / 5;
};

const ranking = (rating) => {
    if (rating >= 9) {
        return "Very good";
    } else if (rating <= 9 && rating >= 8) {
        return "Good";
    } else {
        return "Not good";
    }
};

const aguRoom = 9;
const aguPark = 8;
const aguBath = 7;
const aguLiving = 9;
const aguKitchen = 6;

const aguAvg = calAvg(aguBath, aguKitchen, aguLiving, aguPark, aguRoom);

console.log(`
Rating: ${aguAvg}
Ranking: ${ranking(aguAvg)}
      `)