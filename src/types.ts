export interface RepairRequest {
  id: string;
  ticketNumber: string;
  deviceType: string;
  serialNumber: string;
  problemDescription: string;
  status: 'pending' | 'processing' | 'completed';
  createdAt: string;
  customerName: string;
  technicianNote?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'technician' | 'admin';
  avatar?: string;
}
