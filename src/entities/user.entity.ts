import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('Movie')
class Movie{

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({length: 50})
    name: string

    @Column({type:'varchar', nullable: true})
    description: string | null | undefined

    @Column({type: 'integer'})
    duration: number

    @Column({type: 'integer'})
    price: number

};

export{
    Movie
};
