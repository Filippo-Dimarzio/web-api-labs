import { Box, Button, Card, CardActions, CardContent, CardHeader, Chip, Grid, Stack } from '@mui/material';
import CheckCircle from '@mui/icons-material/CheckCircle';
import Delete from '@mui/icons-material/Delete';
import Schedule from '@mui/icons-material/Schedule';

const Task = (props) => {
  const priority = props.priority ?? 'Medium';
  const priorityColor = priority === 'High' ? 'error' : priority === 'Low' ? 'success' : 'warning';

  return (
    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
      <Card sx={{ height: '100%', borderRadius: 3, boxShadow: 3, bgcolor: props.done ? '#e3f2fd' : '#fff' }}>
        <CardHeader title={props.title} sx={{ bgcolor: '#e3f2fd', textAlign: 'center' }} />
        <CardContent>
          <Stack direction="row" spacing={1} justifyContent="space-between" sx={{ mb: 2 }}>
            <Chip label={priority} color={priorityColor} size="small" />
            <Chip icon={<Schedule />} label={props.deadline} variant="outlined" size="small" />
          </Stack>
          {props.description && <Box sx={{ textAlign: 'center', fontStyle: 'italic' }}>{props.description}</Box>}
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
          <Button variant="contained" color="success" size="small" startIcon={<CheckCircle />} onClick={props.markDone}>Done</Button>
          <Button variant="contained" color="error" size="small" startIcon={<Delete />} onClick={props.deleteTask}>Delete</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Task;

