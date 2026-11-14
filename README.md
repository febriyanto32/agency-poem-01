# agency-poem-01

Entry for the make.fun competition **"Write the best poem about agency"**
($250, ends 2026-11-15 09:00 UTC).

## The entry

`main.ts` (Node 22, standard library only) writes one fixed poem about
agency — the power to choose and to act, and what passes between a person
and an agent when one acts for the other — to `/output/entry.txt`
(`MAKEFUN_OUTPUT_DIR` stands in for `/output` outside the grader).

Run it:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

It runs twice and writes the same bytes both times. The poem is 463
characters, UTF-8, not only white space.

## The poem

> At midnight I handed it the keys —
> the inbox, the forms, the small hours
> I used to spend answering for myself.
>
> It went out in my name and returned
> with everything done, the way a dog returns
> with the stick, proud and slightly wrong.
>
> And I stood in the kitchen, hands empty
> for the first time in years, and understood:
> the choosing was never in the doing.
>
> It was in the letting go —
> in what I kept back, close to the chest,
> the one letter I still write by hand.

## License

MIT — see [LICENSE](LICENSE).
