import { render, screen, fireEvent } from '@testing-library/react'
import TreeNodeComponent from './TreeNodeComponent'
import TreeViewSchema from "../../data/data.json"

window.HTMLElement.prototype.scrollIntoView = () => jest.fn()

test('Component rendering <TreeNodeComponent />', () => {
    render(
        <TreeNodeComponent id={new Date().getTime().toString()} name={'User name'} level={0} parentChecked={false} setIndeterminate={jest.fn()} children={{}} />
    )
    const TreeNode = screen.getByText(/User name/i)
    expect( TreeNode ).toBeInTheDocument()
})

test('Checked input validation', () => {
    const handleChange  = jest.fn()
    const { container } = render(
        <TreeNodeComponent id={new Date().getTime().toString()} name={'Item title'} level={0} parentChecked={false} setIndeterminate={handleChange} children={{}} />
    )

    const checkbox = container.querySelector('[type="checkbox"]')
    expect( checkbox ).toBeInTheDocument()
    fireEvent.click( checkbox )
    expect(handleChange).toHaveBeenCalledTimes(1)
})

test('Validate TreeView Schema', () => {
    const props = ["id", "name", "children", "level"]

    const ValidateSchema = schema => Object.values( schema ).lenth === 0 || Object.values( schema ).map( node => {
        return Object.keys(node).every( prop => ( prop === 'children' ) ? ValidateSchema(node[prop]) : props.includes(prop) ) 
    })
    .every(Boolean)

    expect(
        ValidateSchema( TreeViewSchema )
    )
    .toBe(true)
})

