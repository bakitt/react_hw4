import Btns from "./Btns";
import Correct from './Correct'


const Main = ({ todoList, setKey, status, data, setData }) => {

    return (
        <div className="main">

            {
                todoList.map(item => {
                    return <div key={item.id} className="main-item">
                        <div className="main-item-left">
                            {
                                item.correct
                                    ? <Correct 
                                    item={item} 
                                    data={data} 
                                    setData={setData} 
                                    setKey={setKey}/>
                                    : <>
                                        <button onClick={() => {
                                            setKey('completed', item.id)
                                        }} className="circle-btn">{
                                                item.completed ? '+' : ''
                                            }</button>
                                        <p>{item.text}</p>
                                    </>
                            }


                        </div>


                        <div className="main-item-right">
                            {
                                item.correct
                                    ? ''
                                    : <Btns
                                        data={data}
                                        setData={setData}
                                        setKey={setKey}
                                        item={item}
                                        status={status} />
                            }
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default Main;
