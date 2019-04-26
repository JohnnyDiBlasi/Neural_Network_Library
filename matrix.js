class Matrix {

	constructor(rows, cols) {
		this.rows = rows;
		this.cols = cols;
		this.data = [];
		for (let i = 0; i < this.rows; i++) {
			this.data[i] = [];
			for (let j = 0; j < this.cols; j++) {
				this.data[i][j];
			}
		}
	}

	copy() {
		let m = new Matrix(this.rows, this.cols);
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				m.data[i][j] = this.data[i][j];
			}
		}
	}
}