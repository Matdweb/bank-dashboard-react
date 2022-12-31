import React from 'react'
import { Button, WrapItem } from '@chakra-ui/react'

function Status({status}) {
    if (status == "Recommended"){
        return (
            <WrapItem>
                <Button width='180px' colorScheme='whatsapp'>Recommended</Button>
            </WrapItem>
        )
    }else{
        return(
            <WrapItem>
                <Button width='180px' colorScheme='red'>Not Recommended</Button>
            </WrapItem>
        )
    }

}

export default Status