import React from 'react'
import styled from 'styled-components'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Table, TableProps, Typography } from '@equinor/eds-core-react'
import './../style.css'

const { Body, Row, Cell, Head } = Table

export default {
  title: 'Components/Table',
  component: Table,
  subcomponents: { Body, Row, Cell, Head },
  parameters: {
    docs: {
      description: {
        component: `A basic table component`,
      },
    },
  },
}

export const simpleTable: Story<TableProps> = () => (
  <Table>
    <Head>
      <Row>
        <Cell as="th" scope="col">
          Name
        </Cell>
        <Cell as="th" scope="col">
          Allegiance
        </Cell>
        <Cell as="th" scope="col">
          Kill count
        </Cell>
      </Row>
    </Head>
    <Body>
      <Row>
        <Cell>Luke Skywalker</Cell>
        <Cell>Republic</Cell>
        <Cell variant="numeric">369470</Cell>
      </Row>
      <Row>
        <Cell>Darth Vader</Cell>
        <Cell>Sith</Cell>
        <Cell variant="numeric">59</Cell>
      </Row>
    </Body>
  </Table>
)

export const FixedTableHeader = () => {
  const FixedContainer = styled.div`
    width: 200px;
    height: 200px;
    overflow: auto;
  `
  const StickyHeader = styled(Head)`
    top: 0;
    display: block;
    position: sticky;
  `

  const FullTable = styled(Table)`
    width: 100%;
    height: 100%;
  `

  return (
    <FixedContainer>
      <FullTable>
        <StickyHeader>
          <Row>
            <Cell as="th">Header</Cell>
          </Row>
        </StickyHeader>
        <Body>
          <Row>
            <Cell>Cell 1</Cell>
          </Row>
          <Row>
            <Cell>Cell</Cell>
          </Row>
          <Row>
            <Cell>Cell</Cell>
          </Row>
          <Row>
            <Cell>Cell</Cell>
          </Row>
          <Row>
            <Cell>Cell</Cell>
          </Row>
          <Row>
            <Cell>Cell</Cell>
          </Row>
          <Row>
            <Cell>Cell</Cell>
          </Row>
          <Row>
            <Cell>Cell</Cell>
          </Row>
          <Row>
            <Cell>Cell</Cell>
          </Row>
        </Body>
      </FullTable>
    </FixedContainer>
  )
}
