import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('movies_s5')
class movies_s5{

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({length: 50})
    name: string

    @Column({type:'text', nullable: true})
    description: string

    @Column({type: 'integer'})
    duration: number

    @Column({type: 'integer'})
    price: number

};

export{
    movies_s5
};
