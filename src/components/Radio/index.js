import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Radio from 'material-ui/Radio';
import {withStyles} from 'material-ui/styles';
import classnames from 'classnames'
import RadioGroup from './radio-group'
import RadioButton from './radio-button'

const styles = theme => {
    let fontSize = theme.typography.fontSize,
        activeColor = theme.radio.primary,
        fontColor=theme.palette.text.secondary,
        fontColorPar=theme.palette.text.primary
    return {
        root: {
            display: 'inline-block',
            marginBottom:10,
            fontSize: fontSize,
            cursor:'pointer',
            marginRight:8,
            color:fontColorPar
        },
        readOnly:{
            color: theme.disabled.color,
            backgroundColor: theme.disabled.backgroundColor,
            cursor: "not-allowed"
        },
        radioRoot: {
            height: 16,
            width: 16,
            fontSize: fontSize,
            color:fontColor
        },
        checkedSecondary: {
            color: activeColor
        },
        disabled:{
            color:theme.disabled.color
        },
        label:{
            padding:'0 8px'
        },
        sizeIcon: {
            fontSize: 20,
        },
    }
};


@withStyles(styles, {name: 'MuiRadio-ant'})
export default class app extends Component {
    render() {
        const {children, classes,disabled,defaultChecked,checked,value,style,name} = this.props
        let root = classnames(classes.root,disabled&&classes.readOnly)
        let radioClass = {}
        Object.assign(radioClass,{
            default: classes.radioRoot,
            checkedSecondary: classes.checkedSecondary,
            disabled:classes.disabled
        })
        return (
                <label className={root} style={style}>
                    <Radio disabled={disabled}
                           disableRipple
                           checked={checked}
                           name={name}
                           onChange={this.props.onChange}
                           value={value}
                           defaultChecked={defaultChecked}
                           classes={radioClass}
                           icon={<i className={classnames(classes.sizeIcon,"fa fa-circle-o")} aria-hidden="true"> </i>}
                           checkedIcon={<i className={classnames(classes.sizeIcon,'fa fa-dot-circle-o')} aria-hidden="true"> </i>}
                        />
                    <span className={classes.label}>
                      {children}
                    </span>
                </label>
        )
    }
}
app.propTypes = {
    disabled:PropTypes.bool,//当前选项是否只读
    defaultChecked:PropTypes.bool, //默认是否选中
    checked:PropTypes.bool, //是否选中
    value:PropTypes.string, //根据 value 进行比较，判断是否选中
    onChange: PropTypes.func, // 选中改变
    style:PropTypes.object, //行内样式
};
app.Group = RadioGroup
app.Button = RadioButton