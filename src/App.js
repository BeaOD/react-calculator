import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>

<div className="container mainc">
	<div className="row r1">
		<div className="col-md-12">0</div>
	</div>

	<div className="row r2">
		<div className="col-md-3 AC"><h3>AC</h3></div>
		<div className="col-md-3 pm"><h3>+/-</h3></div>
		<div className="col-md-3 per"><h3>%</h3></div>
		<div className="col-md-3 divide"><h3>&#247;</h3></div>
	</div>

	<div className="row r3">
		<div className="col-md-3 sev"><h3>7</h3></div>
		<div className="col-md-3 eig"><h3>8</h3></div>
		<div className="col-md-3 nin"><h3>9</h3></div>
		<div className="col-md-3 multiply"><h3 class="x">&#215;</h3></div>
	</div>

	<div className="row r4">
		<div className="col-md-3 fou"><h3>4</h3></div>
		<div className="col-md-3 fiv"><h3>5</h3></div>
		<div className="col-md-3 six"><h3>6</h3></div>
		<div className="col-md-3 minus"><h3>-</h3></div>
	</div>

	<div className="row r5">
		<div className="col-md-3 one"><h3>1</h3></div>
		<div className="col-md-3 two"><h3>2</h3></div>
		<div className="col-md-3 thr"><h3>3</h3></div>
		<div className="col-md-3 pl"><h3>+</h3></div>
	</div>

	<div className="row r6">
		<div className="col-md-6 zer"><h3>0</h3></div>
		<div className="col-md-3 dot"><h3>.</h3></div>
		<div className="col-md-3 eq"><h3>=</h3></div>
	</div> 
	
</div>


</>
  );
}

export default App;
