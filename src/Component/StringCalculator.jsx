import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  Alert,
} from "@mui/material";
import { useStringSumCalculator } from "../Utills/useStringSumCalculator";

const StringCalculator = () => {
  const { sum, error, add } = useStringSumCalculator();
  const [input, setInput] = useState("");
  
  return (
    <Container maxWidth="sm">
      <Box mt={4} p={3} border={1} borderColor="grey.300" borderRadius={2}>
        <Typography variant="h4" gutterBottom>
          String Calculator
        </Typography>
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
          onClick={() => add(input)}
          sx={{ mt: 2 }}
        >
          Calculate
        </Button>

        {sum !== null && (
          <Alert severity="success" sx={{ mt: 2 }}>
            Result: {sum}
          </Alert>
        )}

        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
      </Box>
    </Container>
  );
};

export default StringCalculator;
