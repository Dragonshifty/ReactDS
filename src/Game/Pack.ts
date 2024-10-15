import { Card } from "./Card";

export class Deck {
    private houses: string[] = ["Cat", "Fox", "Falcon", "Dragon"];

    private shuffle<T>(values: T[]): void {
        for (let i = values.length - 1; i > 0; i--) {
            const randIndex = Math.floor(Math.random() * (i + 1));
            [values[i], values[randIndex]] = [values[randIndex], values[i]];
        }
    }

    public getSortedCards(): Card[] {
        let pack: Card[] = [];

        for (let house of this.houses) {
            for (let i = 2; i < 15; i++) {
                let tempCard = new Card(house, i);
                pack.push(tempCard);
            }
        }

        this.shuffle(pack);

        return pack;
    }
}
