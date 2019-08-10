import Coordinates from "./Coordinates"

class City extends Coordinates {
    constructor(id, name, coordinates) {
        super(coordinates.longitude, coordinates.latitude)
        this.id = id
        this.name = name
    }
}

export default City