var Input_Select = (props) => {
    ///value={this.props.section} onChange={(ev) => this.change_input(ev, 'gypType')}
    if(Array.isArray(props.valuesTexts)) {
        var valuesTexts = props.valuesTexts;
    } else {
        var valuesTexts = [];
        for (var key in props.valuesTexts) {
            valuesTexts.push({value: key, text: props.valuesTexts[key]});
        }
    }
    
    return (
        <div>
            <select className={props.css}>
                {valuesTexts.map(valueText => {
                    return typeof valueText === 'string' 
                           ? props.selected === valueText ?  <option selected value={valueText}>{valueText}</option>
                                                                :  <option value={valueText}>{valueText}</option>
                           : props.selected === valueText.value ? <option selected value={valueText.value}>{valueText.text}</option>
                                                                : <option value={valueText.value}>{valueText.text}</option>
                })}
            </select>
        </div>
    )
}

export default Input_Select;