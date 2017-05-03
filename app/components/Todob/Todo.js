import React, { Component } from 'react';
import styles from './styles';

class Todo extends Component { /*(99):第一段是起始狀態, 接下來是methods再來是render html是嘛*/
    constructor(props) { //must include constructor, except constant
        super(props);
        this.state = {      /*(6) (99):怎麼知道是要寫這樣格式@@給個ref謝謝*/
          apple: [],        /*array []; (1) (99)這不懂*/
          todo: {           /*json format(99):我知道json是用來儲存資訊, 所以只能用json對嗎, 然後這個todo都是用json格式儲存和讀取資料對嗎-->todo.id*/
            id: '',
            title: '',                                        /*(2)*/
            updatedAt: '',                                    /*(99):我試過不用camel case也可以*/
          },
          inputText: '',
          name: this.props.name,
          editPanel: true,
          editInputText: '',
          editInputItem: {
            id:'',
            title:''
          }
        };
        this.ChangeTtttext = this.ChangeTtttext.bind(this);   //. (99):綁定是固定的格式對吧. 這裡是綁定這些方法可以在這個物件使用, 非data binding. ChangeTtttext & addtodo&deletetodo are methods that "we"created, not by default//
        this.AddTodo = this.AddTodo.bind(this);               //better to name the mdethos like this: verb+noun: Add todo
        this.DeleteTodo = this.DeleteTodo.bind(this);         //usually blue are the methods we careted
        this.EditTodo = this.EditTodo.bind(this);
        this.changeEditText = this.changeEditText.bind(this);
        this.closeEditedTodo = this.closeEditedTodo.bind(this);
    }
    ChangeTtttext(e) {  /*(99):e寫在()是代表要被再次使用的意思嗎*/

        let amount = this.state.apple.length + 1 /*(5), +1代表從1開始, 不然就是0, 對使用者來說很奇怪, */
        let rightNow = new Date()
        this.setState({   /* (99):只要是更新狀態都要寫SET.STATE是嘛.  set state以下todo的資料會去更新在(6). 底下的新的資料是(˙7))*/
          todo: {
            id:amount,             /*系統自動給: id   */
            title: e.target.value,   /*(99):??.   使用者輸入的資料= target.value. 這裡使用者輸入的資料就只有這個, date/id都是我們請系統給的*/
            updatedAt:rightNow.toString(),  /*系統自動給: 新增日期*/
          },
          inputText:  e.target.value
        });
    }
    AddTodo () {
        this.state.apple.push(this.state.todo);   {/*這邊是新增, push會把todo的資料(todo/id/title) push到todo"s"裡面,push就是把(7)的資料丟到(1)裡面. push就是把
        就是把資料丟到陣列裡面, 只能陣列 */}
        this.setState({   /*接下來要清空(資料清空, 非葉面顯示清空, 這是兩件事情), 才能讓下一個人再次輸入資料, 這邊一次只能儲存一筆資料, 因為我們給的框框只有一個,
          如果有十個框框,就可以輸入時筆資料*/
          todo: {
            id: '',
            title: '',
            updatedAt: '',
          },
          inputText:''   /*這邊代表輸入資料(表面) 然後之後要變成空的. 把(10)變成空的*/
        });
    }
    
    //當輸入新的文字內容時，更新到editInputText欄位中
    changeEditText (e) {
      this.setState({
        editInputText:e.target.value
      })
    }

    //當按下編輯的按鈕，取得該筆資料並更新文字到單獨欄位，以便輸入新的內容時同步更新。
    EditTodo(item){
      this.setState({
        editInputItem:{
          id:item.id,
          title:item.title
        },
        editInputText: item.title,
        editPanel:false
      })
    }

    //當按下確認按鈕時，再進行儲存的動作
    closeEditedTodo (key) {
      let id = key-1
      let data = this.state.apple
          data[id].title = this.state.editInputText
      // console.log(this.state.editInputText)  
      this.setState({
        apple: data,
        editPanel:true
      })
    }
    DeleteTodo(deleteItem) {   /*(99):是不是其實可以不用這個.  這裡只是顯示Log 山除了第幾筆, 跟(8)有關係*/
      let data = this.state.apple.filter((_item) => {
        // console.log(_item.id + '--' + deleteItem);
        return _item.id !== deleteItem
      })
      this.setState({apple:data })
    }
    render(){
        return (
          <div>    {/*these are just displaying some html*/}
            <hr/>
            <h3>TodoHeader</h3>
            <div className="row">
              <div className="col-md-6">
                <input onChange={this.ChangeTtttext} value={this.state.inputText} className="form-control" type="text"/>  
                {/*on key up=某個function, 鍵盤在案的時候,他會去拿changetttext裡面的 (5), */}
                <button className="btn btn-sn btn-danger" onClick={this.AddTodo}>{this.state.name}新增</button> 
                {/*bind a addtodo method to the button*/}
                <hr/>
                <ul>
                {/*這裡會跑todo 新增之後的東西, 用迴圈的方式*/} {/*大括號裡面代表可以做react的程式碼(javascript)*/}
                  {
                    this.state.apple.map((todo, index) => (  /*這裡用map的方式去跑 (1)的東西, ()裡面是value, 是自己宣告的, 可以改名, index是索引職的意思
                      , 類似每個文件都給的編號, 之後好找. TODO就是索引職裡面會放的東西. INDEX可以改, 可以是要記得, 那個位置就是放索引直,
                      MAP之後會跑"apple"的咚咚, 不是"TO DO"喔, 看有幾個apple就跑幾個出來, 然後會跑出( )裡面的東西出來
                      (99): 不懂為何使用apple array; 不懂map可以這樣寫以及後面的東西*/
                      <li key={index}> {/*(99)不懂這個*/}
                        <div>
                          {todo.title}   {/* 呼應上面的(2), title類似衣櫃裡面的短秀(99)為什麼不用寫this.state!!?*/}
                          <button className="btn btn-sm btn-info" onClick={() => {
                            this.EditTodo(todo)
                          }}>修改</button>
                          <button className="btn btn-sm btn-default" onClick={() => {
                            this.DeleteTodo(todo.id) 
                          }}>移除</button>
                        </div>
                      </li>
                    ))
                  }
                  </ul>

                  <div className={this.state.editPanel ? 'hidden' : ''}>
                    <input type="text" className="form-control" onChange={this.changeEditText} value={this.state.editInputText} /> 
                    <button className="btn btn-sm btn-info" onClick={() => {
                      this.closeEditedTodo(this.state.editInputItem.id) 
                    }}>確認</button>
                  </div>

               </div>
                <div className="col-md-6">
                  <table style={styles.table}>
                    <tbody>
                    {
                    this.state.apple.map((todo, index) => (  
                    <tr key={index}>
                      <td>{todo.id}</td>
                      <td>{todo.title}</td>
                      <td>{todo.updatedAt}</td>
                    </tr>
                    ))
                    }
                    </tbody>
                  </table>
                </div>
              </div>
          </div>
        );
    }
}
export default Todo;