class Test extends React.Component{
    renderTest(){
        return(
            <div className="container-fluid">
                <h3> TEST UI </h3>
                <div id="form">
                    <div>
                        <label htmlFor="includeInputs"> TEST </label>
                        <button type="button">Click Me!</button>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.setState({});
    }


    render() {
        if(this.state){
            return this.renderTest();
        }
        return "Test";
    }
}


ReactDOM.render(<Test/>, document.getElementById('root'));