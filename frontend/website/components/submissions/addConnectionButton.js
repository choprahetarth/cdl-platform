import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import EditIcon from '@material-ui/icons/Edit';
import Slide from '@material-ui/core/Slide';
import { Typography } from '@mui/material';
import SubmissionForm from '../forms/submissionForm';
import useSubmissionStore from '../../store/submissionStore';

const AddConnectionsButton = ({ setSelectedOption }) => {
    const [isTextBoxVisible, setTextBoxVisible] = useState(false);
    const { submissionTitle, submissionCommunitiesNameMap, submissionDisplayUrl, setSubmissionProps }
        = useSubmissionStore();

    const { connectionDescription, setConnectionDescription } =
        useState(`Reply to [${submissionTitle}](${submissionDisplayUrl})`);
    // useState(`Reply to [[${submissionTitle}]]` + ' ');

    const handleButtonClick = () => {
        // setSubmissionProps({ submissionMode: "create" });
        setTextBoxVisible(true);
    };

    const handleViewConnectionsClick = () => {
        setSelectedOption('graph');
    }

    return (
        <>
            <Box>
                <Button
                    // sx={{
                    //     color: 'black',
                    //     backgroundColor: 'black',
                    //     '&:hover': {
                    //         color: 'white',
                    //     },
                    // }}
                    onClick={handleButtonClick} variant="contained" size="small">
                    {/* startIcon={<EditIcon />} */}
                    Add Incoming Connection
                </Button>

                <Slide direction="left" in={isTextBoxVisible} mountOnEnter unmountOnExit>
                    <div style={{ padding: 2 }}>
                        <SubmissionForm
                            isAConnection={true}
                            source_url=""
                            title=""
                            description={`Reply to [${submissionTitle}](${submissionDisplayUrl})`}
                            communitiesNameMap={submissionCommunitiesNameMap}
                        />

                    </div>
                </Slide>
            </Box>
        </>
    );

};

export default AddConnectionsButton;
