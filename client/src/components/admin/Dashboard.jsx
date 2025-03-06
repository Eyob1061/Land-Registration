import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Paper,
  Button,
} from '@mui/material';
import {
  Description,
  People,
  Map,
  TrendingUp,
} from '@mui/icons-material';

const StatCard = ({ title, value, icon, color }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        {React.cloneElement(icon, { sx: { fontSize: 40, color } })}
      </Box>
      <Typography variant="h5" component="div" gutterBottom>
        {value}
      </Typography>
      <Typography color="text.secondary">
        {title}
      </Typography>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  // Sample data - replace with actual data from your backend
  const stats = {
    totalCertifications: 150,
    activeParcels: 200,
    registeredUsers: 50,
    monthlyRegistrations: 25,
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Statistics Cards */}
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Certifications"
            value={stats.totalCertifications}
            icon={<Description />}
            color="#1976d2"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Active Parcels"
            value={stats.activeParcels}
            icon={<Map />}
            color="#2e7d32"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Registered Users"
            value={stats.registeredUsers}
            icon={<People />}
            color="#ed6c02"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Monthly Registrations"
            value={stats.monthlyRegistrations}
            icon={<TrendingUp />}
            color="#9c27b0"
          />
        </Grid>

        {/* Recent Activity */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recent Activity
            </Typography>
            {/* Add your activity list or table here */}
          </Paper>
        </Grid>

        {/* Quick Actions */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Quick Actions
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button variant="contained" startIcon={<Description />}>
                Generate Report
              </Button>
              <Button variant="contained" startIcon={<People />}>
                Manage Users
              </Button>
              <Button variant="contained" startIcon={<Map />}>
                View Parcels
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* System Status */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              System Status
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>System Status</Typography>
                <Typography color="success.main">Online</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>Last Backup</Typography>
                <Typography>2 hours ago</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>Server Load</Typography>
                <Typography>45%</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
