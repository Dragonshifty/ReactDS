export class Card {
    constructor(
        private _house: string,
        private _rankName: string,
        private _rankValue: number
    ) {}

    get house(): string {
        return this._house;
    }

    set house(value: string) {
        this._house = value;
    }

    get rankName(): string {
        return this._rankName;
    }

    set rankName(value: string) {
        this._rankName = value;
    }

    get rankValue(): number {
        return this._rankValue;
    }

    set rankValue(value: number) {
        this._rankValue = value;
    }
}
