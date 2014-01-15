/**
 * Controls the interpreter and initializer functions
 * @tableName - gives the table that the controller will be using
 * @figureMode - sets the flag that signals Figure or Architecture Mode
 */
function controller(tableName, figureMode) {
	// Name of the HTML table being used
	this.tableName = tableName;
	
	// Determines if in Figure or Architecture mode
	// True for Figure, False if Architecture
	this.figureMode = figureMode;
	
	// Has the table been edited recently?
	// Set to true by default
	this.edited = true;
	
	// Initial program counter
	// Increased when .Block and .Word is used/modified
	this.programCounter = 0;
	
	// Alerts the controller that the program has finished
	this.stop = false;
	
	// List of used variables
	// More important in figure mode
	this.variables = [];
	
	// Information Storage for Registers
	// Also gives flag about if Registers are used
	// Initial values set to 0 and false
	this.register = [
	                 ["Reg0", 0, false], // Reg0
	                 ["Reg1", 0, false], // Reg1
	                 ["Reg2", 0, false], // Reg2
	                 ["Reg3", 0, false], // Reg3
	                 ["Reg4", 0, false], // Reg4
	                 ["Reg5", 0, false], // Reg5
	                 ["Reg6", 0, false], // Reg6
	                 ["Reg7", 0, false], // Reg7
	                 ["Reg8", 0, false], // Reg8
	                 ["Reg9", 0, false], // Reg9
	                 ["RegA", 0, false], // RegA
	                 ["RegB", 0, false], // RegB
	                 ["RegC", 0, false], // RegC
	                 ["RegD", 0, false], // RegD
	                 ["RegE", 0, false], // RegE
	                 ["RegF", 0, false]  // RegF
	                 ];
	
	// Goes through and checks through the table for changes
	// as well as which variables are in use.
	// Initializes the Registers and Variable arrays if needed.
	// If on figure tab, also populates Variable Table.
	this.init = function(){
		if(this.figureMode){
			// Initialize the Variable Table
		} else {
			// Don't initialize the Variable Table
		}
	};
	
	// Add function. Takes three arguments, and logically follows:
	// Reg1 = Reg2 + Reg3
	this.add = function(reg1, reg2, reg3){
		var arg1, arg2, arg3;
		for(var i = 0; i < 16; i++){
			if(this.register[i][0] === reg1){
				arg1 = i;
				break;
			}
		}
		for(var i = 0; i < 16; i++){
			if(this.register[i][0] === reg2){
				arg2 = i;
				break;
			}
		}
		for(var i = 0; i < 16; i++){
			if(this.register[i][0] === reg3){
				arg3 = i;
				break;
			}
		}
		this.register[arg1][1] = this.register[arg2][1] + this.register[arg3][1];
	};
	
	// Evaluates the command at the given line.
	// Essentially the core interpreter of the program
	// Changes RegN values into index numbers
	this.eval = function(line){
		var table = document.getElementById(tableName);
		switch(table.rows[line].cells[3]){
			case "Halt":
				// halt function
				break;
			case "Add":
				this.add(table.rows[line].cells[4], table.rows[line].cells[5], table.rows[line].cells[6]);
				break;
			case "Sub":
				// sub function
				break;
			case "Load":
				// load function
				break;
			case "LoadImm":
				// loadImm function
				break;
			case "LoadInd":
				// loadInd function
				break;
			case "Store":
				// store function
				break;
			case "StoreInd":
				// storeInd function
				break;
			case "And":
				// and function
				break;
			case "Or":
				// or function
				break;
			case "ASL":
				// asl function
				break;
			case "ASR":
				// asr function
				break;
			case "Not":
				// not function
				break;
			case "Compare":
				// compare function
				break;
			case "Branch":
				// branch function
				break;
			case "Jump":
				// jump function
				break;
		}
	};
	
	// Runs through the program
	// First checks if the code has recently been edited.
	this.run= function() {
		if(this.edited) {
			this.init();
		} else {
			// Looping Walk and updating table format
		}
		
	};
	
	// Walks through one step of the program
	this.walk = function() {
		if(this.edited) {
			this.init();
		} else {
			// Walk through one step of program
			// Update table format
			// Update Program Counter
		}
	};
}