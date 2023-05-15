import "./Layout.css"

class Layout{
    constructor(height,width,connections){
        this.width = width
        this.height = height
        //this.connections = this.connections
    }

    generateLayout() {
        const grid = [];
    
        for (let row = 0; row < this.height; row++) {
          const rowCells = [];
    
          for (let col = 0; col < this.width; col++) {
            rowCells.push(<div className="grid-cell" key={`${row}-${col}`}></div>);
          }
          grid.push(
            <div className="grid-row" key={row}>
              {rowCells}
            </div>
          );
        }
        return <div className="grid">{grid}</div>;
      }

    

}

export default Layout;