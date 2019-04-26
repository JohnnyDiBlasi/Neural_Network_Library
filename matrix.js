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

	convertToMatrix(theArray) {
		let m = new Matrix(theArray.length, 1);
		for (let i = 0; i < theArray.length; i++) {
			m.data[i][0] = theArray[i];
		}
		return m;
	}

	convertToArray() {
		let theArray = [];
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				theArray.push(this.data[i][j]);
			}
		}
		return theArray;
	}

	multiply(n) {
		if (n instanceof Matrix) {
			for (let i = 0; i < result.rows; i++) {
				for (let j = 0; j < result.cols; j++) {
					this.data[i][j] *= n.data[i][j];
				}
			}
		}
		else {
			for (let i = 0; i < this.rows; i++) {
				for (let j = 0; j < this.cols; j++) {
					this.data[i][j] *= n;
				}
			}
		}
	}


	//Matrix Product:
	static matrixProduct(a, b) {
		if (a.cols != b.rows) {
			console.log('The Columns of Matrix A MUST MATCH the Rows of Matrix B');
			return undefined;
		}
		let result = new Matrix(a.rows, b.cols);
		for (let i = 0; i < result.rows; i++) {
			for (let j = 0; j < result.cols; j++) {
				let sum = 0;
				for (let k = 0; k < a.cols; k++) {
					sum += a.data[i][k] * b.data[k][j];
				}
				result.data[i][j] = sum;
			}
		}
		return result;
	}


}





































