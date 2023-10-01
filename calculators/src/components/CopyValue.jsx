import React, { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from '@mui/material/Button';
const CopyValue = ({value}) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    }
  return (
    <CopyToClipboard text={value} onCopy={handleCopy}>
        {copied ? <Button component="label" color="success" variant="contained" startIcon={<CheckCircleOutlineRoundedIcon/>}>
            Copied
        </Button> : 
        <Button component="label" variant="contained" startIcon={<ContentCopyIcon/>}>
            Copy
        </Button>}
    </CopyToClipboard>
  )
}

export default CopyValue