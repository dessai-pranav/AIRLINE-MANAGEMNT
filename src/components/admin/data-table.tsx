"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type User = {
  id: number
  name: string
  email: string
  created_at: string
}

type Flight = {
  id: number
  flight_number: string
  origin: string
  destination: string
  departure_time: string
  status: string
}

export function DataTable() {
  const [users, setUsers] = useState<User[]>([])
  const [flights, setFlights] = useState<Flight[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
        .then((res) => res.json())
        .then((data) => {
          console.log("Users Data:", data); // Check what you get from the API
          setUsers(data);
        })
        .catch((err) => console.error("Failed to fetch users", err));

    fetch("http://localhost:5000/api/flights")
        .then((res) => res.json())
        .then((data) => {
          console.log("Flights Data:", data); // Check what you get from the API
          setFlights(data);
        })
        .catch((err) => console.error("Failed to fetch flights", err));
  }, []);
  return (
      <Tabs defaultValue="users" className="w-full px-4 py-6 lg:px-6">
        <div className="mb-4 flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="flights">Flights</TabsTrigger>
          </TabsList>
        </div>

        {/* Users Table */}
        <TabsContent value="users">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Registered On</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.length > 0 ? (
                  users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{new Date(user.created_at).toLocaleDateString()}</TableCell>
                      </TableRow>
                  ))
              ) : (
                  <TableRow>
                    <TableCell colSpan={3}>No users available</TableCell>
                  </TableRow>
              )}
            </TableBody>
          </Table>
        </TabsContent>

        {/* Flights Table */}
        <TabsContent value="flights">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Flight No</TableHead>
                <TableHead>Origin</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Departure</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {flights.length > 0 ? (
                  flights.map((flight) => (
                      <TableRow key={flight.id}>
                        <TableCell>{flight.flight_number}</TableCell>
                        <TableCell>{flight.origin}</TableCell>
                        <TableCell>{flight.destination}</TableCell>
                        <TableCell>{new Date(flight.departure_time).toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{flight.status}</Badge>
                        </TableCell>
                      </TableRow>
                  ))
              ) : (
                  <TableRow>
                    <TableCell colSpan={5}>No flights available</TableCell>
                  </TableRow>
              )}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
  )
}
