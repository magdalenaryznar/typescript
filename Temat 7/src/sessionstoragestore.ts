import { Guid } from './guid';
import { Note } from './note';
import { NoteStore } from './notestore';

export class SessionStorageStore implements NoteStore {

    deleteNote(id: Guid): void {
        let storedNotes= <string>sessionStorage.getItem('notes');
        let notesOld = <Note[]>JSON.parse(storedNotes)
        let notesNew=[]
        for (let note of notesOld) {
            
            if(note.id!==id)
                notesNew.push(note)
        }
        sessionStorage.setItem('notes', JSON.stringify(notesNew));
    }
    
  public addNote(note: Note): void {
        let storedNotes= <string>sessionStorage.getItem('notes');
        let notes = <Note[]>JSON.parse(storedNotes) ?? [];
        notes.push(note);
        sessionStorage.setItem('notes', JSON.stringify(notes));
    }

    public getNotes(): Note[] {
        let storedNotes= <string>sessionStorage.getItem('notes');
        let notes = <Note[]>JSON.parse(storedNotes)
        return notes;
    }
   
}