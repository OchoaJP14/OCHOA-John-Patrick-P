import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.page.html',
  styleUrls: ['./dash-board.page.scss'],
})
export class DashBoardPage implements OnInit {
  data: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Simulated data
    this.data = [
      { name: 'Item 1', description: 'Description for Item 1', rating: 4, duration: '2 hours', date: '2024-03-27', location: 'Location A', participants: 10, likes: 20 },
      { name: 'Item 2', description: 'Description for Item 2', rating: 3, duration: '1 hour', date: '2024-03-28', location: 'Location B', participants: 5, likes: 15 },
      { name: 'Item 3', description: 'Description for Item 3', rating: 5, duration: '3 hours', date: '2024-03-29', location: 'Location C', participants: 8, likes: 25 },
      { name: 'Item 4', description: 'Description for Item 4', rating: 4.5, duration: '2.5 hours', date: '2024-03-30', location: 'Location D', participants: 12, likes: 30 },
      // Add more dummy data as needed
    ];
  }
}