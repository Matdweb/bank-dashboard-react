import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

  import { Stat, StatArrow } from '@chakra-ui/react'
  import Status from './Status'

function BasicTable() {

  const data = [
    {
      url: "/wiki/Afghanistan",
      code: "AFG",
      name: "Afghanistan",
      img: "//upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
      status: "Recommended",
      amount: "$213",
      state: "increase"
    },
    {
      url: "/wiki/Albania",
      code: "ALB",
      name: "Albania",
      img: "//upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg",
      status: "Not Recommended",
      amount: "$213",
      state: "decrease"
    },
    {
      url: "/wiki/Algeria",
      code: "DZA",
      name: "Algeria",
      img: "//upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg",
      status: "Recommended",
      amount: "$213",
      state: "increase"
    },
    {
      url: "/wiki/American_Samoa",
      code: "ASM",
      name: "American Samoa",
      img: "//upload.wikimedia.org/wikipedia/commons/8/87/Flag_of_American_Samoa.svg",
      status: "Recommended",
      amount: "$213",
      state: "increase"
    },
    {
      url: "/wiki/Andorra",
      code: "AND",
      name: "Andorra",
      img: "//upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg",
      status: "Recommended",
      amount: "$213",
      state: "increase"
    },
    {
      url: "/wiki/Angola",
      code: "AGO",
      name: "Angola",
      img: "//upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg",
      status: "Not Recommended",
      amount: "$213",
      state: "decrease"
    },
    {
      url: "/wiki/Anguilla",
      code: "AIA",
      name: "Anguilla",
      img: "//upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Anguilla.svg",
      status: "Recommended",
      amount: "$213",
      state: "increase"
    },
    {
      url: "/wiki/Antigua_and_Barbuda",
      code: "ATG",
      name: "Antigua and Barbuda",
      img: "//upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg",
      status: "Recommended",
      amount: "$213",
      state: "increase"
    },
    {
      url: "/wiki/Argentina",
      code: "ARG",
      name: "Argentina",
      img: "//upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
      status: "Recommended",
      amount: "$213",
      state: "increase"
    },
    {
      url: "/wiki/Armenia",
      code: "ARM",
      name: "Armenia",
      img: "//upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg",
      status: "Not Recommended",
      amount: "$213",
      state: "decrease"
    },
    {
      url: "/wiki/Aruba",
      code: "ABW",
      name: "Aruba",
      img: "//upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Aruba.svg",
      status: "Not Recommended",
      amount: "$213",
      state: "decrease"
    },
    {
      url: "/wiki/Australia",
      code: "AUS",
      name: "Australia",
      img: "//upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
      status: "Not Recommended",
      amount: "$213",
      state: "decrease"
    },
    {
      url: "/wiki/Austria",
      code: "AUT",
      name: "Austria",
      img: "//upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
      status: "Recommended",
      amount: "$213",
      state: "increase"
    },
    {
      url: "/wiki/Azerbaijan",
      code: "AZE",
      name: "Azerbaijan",
      img: "//upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg",
      status: "Recommended",
      amount: "$213",
      state: "increase"
    },
    {
      url: "/wiki/Bahamas",
      code: "BHS",
      name: "Bahamas",
      img: "//upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg",
      status: "Recommended",
      amount: "$213",
      state: "increase"
    },
    {
      url: "/wiki/Bahrain",
      code: "BHR",
      name: "Bahrain",
      img: "//upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg",
      status: "Recommended",
      amount: "$213",
      state: "increase"
    },
    {
      url: "/wiki/Bangladesh",
      code: "BGD",
      name: "Bangladesh",
      img: "//upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg",
      status: "Recommended",
      amount: "$213",
      state: "increase"
    },
    {
      url: "/wiki/Barbados",
      code: "BRB",
      name: "Barbados",
      img: "//upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg",
      status: "Not Recommended",
      amount: "$213",
      state: "decrease"
    },
    {
      url: "/wiki/Belarus",
      code: "BLR",
      name: "Belarus",
      img: "//upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg",
      status: "Recommended",
      amount: "$213",
      state: "increase"
    },
    {
      url: "/wiki/Belgium",
      code: "BEL",
      name: "Belgium",
      img: "//upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg",
      status: "Not Recommended",
      amount: "$213",
      state: "decrease"
    },
    {
      url: "/wiki/Belize",
      code: "BLZ",
      name: "Belize",
      img: "//upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg",
      status: "Recommended",
      amount: "$213",
      state: "increase"
    },
    {
      url: "/wiki/Benin",
      code: "BEN",
      name: "Benin",
      img: "//upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg",
      status: "Recommended",
      amount: "$213",
      state: "increase"
    },
    {
      url: "/wiki/Bermuda",
      code: "BMU",
      name: "Bermuda",
      img: "//upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bermuda.svg",
      status: "Not Recommended",
      amount: "$213",
      state: "decrease"
    },
    {
      url: "/wiki/Bhutan",
      code: "BTN",
      name: "Bhutan",
      img: "//upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg",
      status: "Not Recommended",
      amount: "$213",
      state: "decrease"
    },
    {
      url: "/wiki/Bolivia",
      code: "BOL",
      name: "Bolivia (Plurinational State of)",
      img: "//upload.wikimedia.org/wikipedia/commons/b/b3/Bandera_de_Bolivia_%28Estado%29.svg",
      status: "Not Recommended",
      amount: "$213",
      state: "decrease"
    },
    {
      url: "/wiki/Caribbean_Netherlands",
      code: "BES",
      name: "Bonaire - Sint Eustatius and Saba",
      img: "//upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
      status: "Recommended",
      amount: "$213",
      state: "increase"
    },
    {
      url: "/wiki/Bosnia_and_Herzegovina",
      code: "BIH",
      name: "Bosnia and Herzegovina",
      img: "//upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg",
      status: "Recommended",
      amount: "$213",
      state: "increase"
    },
    {
      url: "/wiki/Botswana",
      code: "BWA",
      name: "Botswana",
      img: "//upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg",
      status: "Recommended",
      amount: "$213",
      state: "increase"
    },
    {
      url: "/wiki/Brazil",
      code: "BRA",
      name: "Brazil",
      img: "//upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
      status: "Recommended",
      amount: "$213",
      state: "increase"
    },
    {
      url: "/wiki/British_Indian_Ocean_Territory",
      code: "IOT",
      name: "British Indian Ocean Territory",
      img: "//upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_the_Commissioner_of_the_British_Indian_Ocean_Territory.svg",
      status: "Not Recommended",
      amount: "$213",
      state: "decrease"
    },
    {
      url: "/wiki/Brunei_Darussalam",
      code: "BRN",
      name: "Brunei Darussalam",
      img: "//upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg",
      status: "Recommended",
      amount: "$213",
      state: "increase"
    },
    {
      url: "/wiki/Bulgaria",
      code: "BGR",
      name: "Bulgaria",
      img: "//upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg",
      status: "Not Recommended",
      amount: "$213",
      state: "decrease"
    },
  ]

  const icon_styles={
    width: "30px",
    height: "30px",
    borderRadius: "100%",
    border: "2px solid #fff"
  }

  return (
    <TableContainer style={{maxHeight: "95vh", overflowY: "scroll"}}>
      <Table variant='simple'>
        <TableCaption>List of countries involved and their stats</TableCaption>
        <Thead>
          <Tr>
            <Th>Country</Th>
            <Th>name</Th>
            <Th isNumeric>amount</Th>
            <Th>CODE</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((country,index)=>{
            return (
              <Tr key={index}>
                <Td><img src={country.img} style={icon_styles}/></Td>
                <Td>{country.name}</Td>
                <Td isNumeric>
                  <Stat>
                    <StatArrow type={country.state} />
                    {country.amount}
                  </Stat>
                </Td>
                <Td>{country.code}</Td>
                <Td>
                  <Status status={country.status} />
                </Td>
              </Tr>
            )
          })}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Country</Th>
            <Th>name</Th>
            <Th isNumeric>amount</Th>
            <Th>CODE</Th>
            <Th>Status</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}

export default BasicTable