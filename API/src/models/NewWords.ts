import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Users } from "./Users";

@Entity("Words")
class Words {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    id_user: string;

    @ManyToOne(() => Users)
    @JoinColumn({ name: "id_user" })
    user: Users;

    @Column()
    portugueseWord: string;

    @Column()
    englishWord: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Words }