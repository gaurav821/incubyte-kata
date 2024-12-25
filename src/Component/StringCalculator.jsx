import { Alert, Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const StringCalculator = () => {
    
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
  
    const handleCalculate = () => {
      
    };
  
    return (
      <Container maxWidth="sm">
        <Box mt={4} p={3} border={1} borderColor="grey.300" borderRadius={2}>
          <Typography variant="h4" gutterBottom>String Calculator</Typography>
          <TextField
            label="Enter numbers"
            variant="outlined"
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="E.g., 1,2 or //;\n1;2"
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleCalculate}
            sx={{ mt: 2 }}
          >
            Calculate
          </Button>
  
          {result !== null && (
            <Alert severity="success" sx={{ mt: 2 }}>
              Result: {result}
            </Alert>
          )}
        </Box>
      </Container>
    );
  };
  
  export default StringCalculator;