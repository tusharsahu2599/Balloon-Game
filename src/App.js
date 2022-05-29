import React,{useState, useEffect} from 'react'

function App() {

  // state for state management
  const [balloon, setBalloon] = useState([]);
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');


  // BalloonsData 

  const BalloonsData={
    "balloons":[
        {
            "id": "1",
            "height": "150",
            "width": "80",
            "color": "red",
            "borderRadius": "50",
            "borderWidth": "5"
        },
        {
            "id": "2",
            "height": "150",
            "width": "80",
            "color": "blue",
            "borderRadius": "50",
            "borderWidth": "5"
        },
        {
            "id": "3",
            "height": "150",
            "width": "80",
            "color": "green",
            "borderRadius": "50",
            "borderWidth": "5"
        },
        {
            "id": "4",
            "height": "150",
            "width": "80",
            "color": "yellow",
            "borderRadius": "50",
            "borderWidth": "5"
        },
        {
            "id": "5",
            "height": "150",
            "width": "80",
            "color": "orange",
            "borderRadius": "50",
            "borderWidth": "5"
        }
    ]
  }


// useEffect for updated the page when data is updated

useEffect(() => {
  setData([...BalloonsData.balloons])
}, [])



  // function for swap balloon (column to container)

  const handleClick = (e) => {
    let rem = data.splice(e-1, 1)
    console.log("rem", rem)
    setData([...data])
    setBalloon((balloon) => {
      return [...balloon, ...rem]
    })
  }


  // function for again swap (container to column)


  const handleClick2 = (e) => {
    let rem = balloon.splice(e, 1)
    console.log("rem", rem)
    setBalloon([...balloon])
    setData((data) => {
      return [...rem,...data]
    })
    setInput('')
  }

  return (
    <div className="App">
      
      <header
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '100%',
          height: '10vh',
          backgroundColor: '#f5f5f5',
          fontSize: '30px',

        }}
        >
          Syngenta Assignment
        </header>

  {/* Main container */}


      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '100%',
          height: '100%',
        }}
      >
        {/* Column 1 */}

      <div
        style={{
          height: '40vh',
          width: '30vw',
          display: 'flex',
          flexDirection: 'row',
          border: '2px solid black',
        }}>

        {/* Balloons container */}

          {balloon.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  height : '10vh',
                  width : '7vw',
                  backgroundColor: `${item.color}`,
                  borderRadius: '50%',
                  borderWidth: `${item.borderWidth}px`,
                  borderColor: `${item.color}`,
                  margin: '10px',
                }}
                onClick={() => handleClick2(index)}
                >
                  {/* {item.id} */}
                </div>
            )
          })}
        </div>

        {/* balloon column */}

      <div
        style={{
          height: '70vh',
          width: '30vw',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {data.map(data => {
            return (
              <div
                style={{
                  height: `10vh`,
                  width: `7vw`,
                  margin: '10px',
                  border: `${data.borderWidth}px solid ${data.color}`,
                  borderRadius: `${data.borderRadius}px`,
                  backgroundColor: data.color,
                }}
              >

              </div>
            )
          })}
      </div>

      {/* input field */}


      <div
        style={{
          height: '40vh',
          width: '30vw',
        }}>
          <input type="text" placeholder="Enter a number" onChange={(e)=>{setInput(e.target.value)}} />
          <button
          onClick={()=>{handleClick(input)}}
          >Shoot</button>
      </div>
      </div>
    </div>
  );
}
export default App;