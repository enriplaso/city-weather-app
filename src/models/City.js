import Coordinates from "./Coordinates"

class City extends Coordinates {
    constructor(id, name, coordinates) {
        super(coordinates.longitude, coordinates.latitude)
        this.id = id
        this.name = name
    }

    get city() { return {id: this.id, name: this.name} }

    get coordinates() { return {longitude: this.longitude, latitude: this.latitude} }
}

export default City